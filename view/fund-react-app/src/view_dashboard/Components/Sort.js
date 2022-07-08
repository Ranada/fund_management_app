export default function Sort() {
    return (
        <div className="ViewDashboard-sort">
            <h4 className="ViewDashboard-sort-label">Sort by</h4>
            <select>
                <option value="name">Investment name</option>
                <option value="name">Amount invested</option>
            </select>
        </div>
    );
}
