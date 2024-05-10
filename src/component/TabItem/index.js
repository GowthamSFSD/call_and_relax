
import './index.css'

const TabItem = props => {
  const {tabList, onChangeTab, activeButton} = props
  const {tabId, displayText} = tabList
  const changeTab = () => {
    onChangeTab(tabId)
  }
  return (
    <li>
      <button
        onClick={changeTab}
        className={`tab-button ${activeButton}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem