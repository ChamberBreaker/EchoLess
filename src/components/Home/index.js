import React from 'react'
import Comments from './components/Comments'

// Temp data. Replace w/ api calls.
var newsTopics = ['TrendingTopic1', 'TrendingTopic2', 'TrendingTopic3', 'TrendingTopic4', 'TrendingTopic5']
var leftNewsOrgs = ['leftNewsOrg1', 'leftNewsOrg2', 'leftNewsOrg3', 'leftNewsOrg4', 'leftNewsOrg5']
var rightNewsOrgs = ['rightNewsOrg1', 'rightNewsOrg2', 'rightNewsOrg3', 'rightNewsOrg4', 'rightNewsOrg5']

const Home = () => (
  <div className='homeContainer'>
    <h2 className='header'>News Comparison</h2>

    <p className='lead'>It's simple:</p>

    <ol className='lead'>

      <li>Select a news topic.</li>
      <select>{newsTopics.map((val, key) => <option key={key}>{val}</option>)}</select>

      <li>Select two media outlets.</li>
      <select>{leftNewsOrgs.map((val, key) => <option key={key}>{val}</option>)}</select>
      <select>{rightNewsOrgs.map((val, key) => <option key={key}>{val}</option>)}</select>

      <li>Compare coverage.</li>
    </ol>

    <div className='news left' />
    <div className='news right' />

    <Comments />
  </div>
)

export default Home
