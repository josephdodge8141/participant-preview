import './App.css';
import { ParticipantPreview } from './Components/ParticipantPreview';
import { ReloadOutlined } from '@ant-design/icons';

function App() {
  const dummyData = {
    title: 'Instagram Feed Post',
    overview: <p>We want you to show off your favorite Salomon shoes! Share your absolute best shot to your Instagram feed to score 10 points!</p>,
    instructions: <p>Make 1 post to your Instagram feed using <strong>@adidas</strong> while wearing sports clothes.</p>,
    headerImage: 'background-for-wooly-project.jpg',
    program: '',
    points: 10,
    submissionMethod: '',
    approvalMethod: '',
    endDate: {
      ongoing: true,
      date: '12/31/2022',
      repeatsAfter: 30,
      participantLimit: 100,
    },
    guidelines: <p>Curabitur quis elit varius, varius diam cursus, suscipit mauris. Donec dapibus, nisl quis viverra maximus, erat leo dapibus libero, at scelerisque ligula quam sed lectus. Suspendisse dignissim id elit id auctor. Proin finibus lacus ac faucibus ultrices. Nulla egestas ipsum in luctus blandit.</p>
  }
  return (
    <ParticipantPreview
      title={dummyData.title}
      overview={dummyData.overview}
      instructions={dummyData.instructions}
      headerImage={dummyData.headerImage}
      program={dummyData.program}
      points={dummyData.points}
      submissionMethod={dummyData.submissionMethod}
      approvalMethod={dummyData.approvalMethod}
      endDate={dummyData.endDate}
      guidelines={dummyData.guidelines}
      renderBelow={<div style={{ color: '#8C8C8C' }}>Not seeing your post? <a onClick={() => console.log('refreshed')} href='/#'>Refresh <ReloadOutlined /></a></div>}
      onClose={() => console.log('closed')}
    />
  );
}

export default App;
