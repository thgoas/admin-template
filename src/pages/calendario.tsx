import Layout from '../components/template/Layout'
import Calendar from '../components/calendar/Calendar'

export default function Calendario () {
    return (
        <Layout title="Calendário" subtitle="Vendas">
        <div className={`
         flex flex-col ml-3 md:flex-row
        `}>
            <Calendar />
            <Calendar />

            
        </div>
        </Layout>
    )
}