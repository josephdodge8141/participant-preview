import { Card, Collapse } from 'antd';
import { StarOutlined, DownOutlined, UserOutlined, ClockCircleOutlined, ReloadOutlined, CalendarOutlined, CloseOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

export const ParticipantPreview = ({ title, overview, instructions, headerImage, program, points, submissionMethod, approvalMethod, endDate, guidelines, renderBelow, onClose }) => {

    const titleSection = () => {
        return (
            <div style={{ textAlign: 'center' }}>
                <strong style={{ fontSize: 20 }}>{title}</strong>
                <p style={{ marginBottom: 0, fontSize: 12, color: '#8C8C8C', padding: 4 }}>
                    <span className='span'><ClockCircleOutlined /> {endDate.repeatsAfter}d left</span> 
                    <span className='span'><UserOutlined /> {endDate.participantLimit} spots left</span> 
                    <span className='span'>{endDate.ongoing ? <><ReloadOutlined /> Repeats</> : <><CalendarOutlined /> {endDate.date}</>}</span>
                </p>

            </div>
        )

    }

    return (
        <>
            <Card title="Participant Preview" extra={<CloseOutlined onClick={() => onClose()}/>} style={{ width: 375, }} headStyle={{ fontWeight: 'bold' }} bodyStyle={{ background: `#F8F9FA url(${headerImage}) no-repeat center top`, backgroundSize: '100% 180px', padding: 16}}>
                <div style={{ marginBottom: 42 }}>
                    <div className='button'>Available</div>
                    <div className='button' style={{ color: '#005073', float: 'right' }}> <StarOutlined style={{ margin: 0 }}/> {points} points</div>
                </div>
                <Card 
                    title={titleSection()} 
                    style={{boxShadow: '0px 0px 2px rgba(0, 58, 84, 0.15)', borderRadius: '12px 12px 0 0', paddingBottom: 0, border: 'none'}}
                >
                    {overview}
                    <strong>
                        <p>Instructions</p>
                    </strong>
                    {instructions}
                    {renderBelow}
                </Card>
                <Collapse defaultActiveKey={['1']} style={{ background: 'white', borderLeft: 'none', borderRight: 'none', borderColor: '#f0f0f0', boxShadow: '0px 1px 2px rgba(0, 58, 84, 0.15)', borderRadius: '0 0 12px 12px', padding: '0 12px'}}>
                        <Panel showArrow={false} header={<div style={{ width: '100%', fontSize: 16 }}><strong>Guidelines</strong><DownOutlined style={{ float: 'right'}} /></div>} key="2" style={{padding: 0, border: 'none' }}>
                            {guidelines}
                        </Panel>
                </Collapse>
            </Card>
        </>
    )
}