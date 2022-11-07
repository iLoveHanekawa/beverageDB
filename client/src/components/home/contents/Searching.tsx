import React from 'react'

function Searching() {
  return (
    <div>
      <div className = 'heading'>Searching</div>
      <p className = 'text-gray-500 py-10'>Searching parameters are available on the left of the search bar. The default parameter is set to <span className='font-bold'>'Name'</span>. Clicking on the dropdown displays a list of parameters to choose from.</p>
      <p className = 'text-gray-500 pb-10'>Searching on an <span className = 'font-bold'>empty search field</span> will display the list of <span className='font-bold'>all</span> the beverages on the database.</p>
      <p className = 'text-gray-500 pb-10'>Clicking on any beverage in the 'search results' will display more information on the beverage.</p>

    </div>
  )
}

export default Searching