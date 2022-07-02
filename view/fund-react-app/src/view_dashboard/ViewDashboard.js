import FundsLeftToInvest from './Components/FundsLeftToInvest'
import Sort from './Components/Sort'
import FundTable from './Components/FundTable'

export default function ViewDashboard() {

    return (
        <div className="View-dashboard">
            <FundsLeftToInvest />
            <Sort />
            <FundTable />
        </div>
    );
}
