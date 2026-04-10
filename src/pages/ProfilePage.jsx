import { Component } from 'react'
import StatCard from '../components/StatCard'

class ProfilePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        username: 'ctf_starter',
        bio: 'New CTF player learning one challenge at a time.',
        solved: 42,
        attended: 6,
        posted: 8,
        completedTopics: ['Linux Basics', 'Web Exploitation', 'Cryptography'],
      },
    }
  }

  componentDidMount() {
    document.title = 'CTFGuide | Profile'
  }

  render() {
    const { user } = this.state
    const completedTopicItems = []
    for (let i = 0; i < user.completedTopics.length; i += 1) {
      completedTopicItems.push(<li key={user.completedTopics[i]}>{user.completedTopics[i]}</li>)
    }

    return (
      <div className="page">
        <h1 className="title">$ cat profile.txt</h1>
        <p className="accent" style={{ marginBottom: '6px' }}>$ whoami</p>
        <h2 style={{ color: 'var(--text-main)' }}>{user.username}</h2>
        <p>$ {user.bio}</p>

        <div className="stat-row">
          <StatCard label="Challenges Solved" value={user.solved} />
          <StatCard label="CTFs Attended" value={user.attended} />
          <StatCard label="Writeups Posted" value={user.posted} />
        </div>

        <h3 style={{ marginTop: '20px', color: 'var(--accent)' }}>$ completed_topics</h3>
        <ul>{completedTopicItems}</ul>
      </div>
    )
  }
}

export default ProfilePage
