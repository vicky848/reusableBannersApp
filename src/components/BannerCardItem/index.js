// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={className}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button type="button" className="button-show">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
