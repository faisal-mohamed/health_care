
import PageHeader from '../../../layouts/PageHeader'
import { DashboardTabs } from '../../../utilities/constants'

const index = () => {
  return (
    <div>
        <PageHeader navItems={DashboardTabs} />  
        DashBoard Page 2
    </div>
  )
}

export default index