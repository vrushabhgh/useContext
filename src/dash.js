import Card from './card'
export default function Dash() {
    return <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <h3 className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Generate Report</h3>
        </div>

        <div className="row">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </>


}