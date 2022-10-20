import { useState } from 'react';
import MockFundsLeft from '../../mock-funds-left.json';

export default function FundsLeftToInvest() {
    let [fundsLeft, setFundsLeft] = useState(MockFundsLeft)

    const [addFormData, setAddFormData] = useState({
        amountToAdd: 0
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        let sumResult = fundsLeft.amount + parseInt(addFormData.amountToAdd)

        const newAmountLeft = {
            amount: sumResult
        };

        setFundsLeft(newAmountLeft);
    };

    return (
        <div>
            <div className="ViewDashboard-funds-left-to-invest">
                <h2>$ {fundsLeft.amount} <span style={{fontSize: "16px", fontWeight: "400", marginLeft: "6px"}}>left to invest</span></h2>
            </div>
            <div className="ViewDashboard-add-funds">
                <form onSubmit={handleAddFormSubmit}>
                    <input
                    type="number"
                    name="amountToAdd"
                    placeholder= "$0"
                    onChange={handleAddFormChange}
                    />
                    <button type="submit">Add Funds</button>
                </form>
            </div>
        </div>
    );
}
