import { useEffect, useState } from 'react'
import TopicSidebar from '../components/TopicSidebar'
import topics from '../data/topics'

function LearnPage() {
  const [selectedId, setSelectedId] = useState(topics[0].id)

  let selectedTopic = topics[0]
  for (let i = 0; i < topics.length; i += 1) {
    if (topics[i].id === selectedId) {
      selectedTopic = topics[i]
    }
  }

  const toolsList = []
  for (let i = 0; i < selectedTopic.tools.length; i += 1) {
    toolsList.push(<li key={selectedTopic.tools[i]}>{selectedTopic.tools[i]}</li>)
  }

  useEffect(() => {
    document.title = `CTFGuide | ${selectedTopic.name}`
  }, [selectedTopic])

  return (
    <div className="page">
      <h1 className="title">$ cd learn/</h1>
      <div className="split">
        <TopicSidebar topics={topics} selectedId={selectedId} onSelect={setSelectedId} />
        <div className="card" style={{ width: '900px', textAlign: 'left' }}>
          <div className="card-head">
            <h2 className="card-title">$ {selectedTopic.name}</h2>
          </div>
          <div className="card-body">
            <p>$ {selectedTopic.description}</p>
            <h4 className="accent">$ tools</h4>
            <ul>{toolsList}</ul>
            <h4 className="title" style={{ marginTop: '20px' }}>$ example</h4>
            <pre className="code-block">
              {selectedTopic.example}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnPage
