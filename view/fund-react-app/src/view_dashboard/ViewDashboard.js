import FundsLeftToInvest from './Components/FundsLeftToInvest'
import AddFunds from './Components/AddFunds'
import Sort from './Components/Sort'
import FundTable from './Components/FundTable'

export default function ViewDashboard() {
    return (
        <div className="View-dashboard">
            <FundsLeftToInvest />
            <AddFunds />
            <Sort />
            <FundTable />
        </div>
    );
}
