import { useEffect, useState } from "react";


export default function Calendar() {

    const [month, setMonth] = useState<number>(null)
    const [year, setYear] = useState<number>(null)
    const [blankdays, setBlankdays] = useState<any>(null)
    const [no_of_days, setNo_of_days] = useState<any>(null)
    

    function getNoOfDays() {
        let daysInMonth = new Date(year, month + 1, 0).getDate();

        // find where to start calendar day of week
        let dayOfWeek = new Date(year, month).getDay();
        let blankdaysArray = [];
        for ( var i=1; i <= dayOfWeek; i++) {
            blankdaysArray.push(i);
        }

        let daysArray = [];
        for ( var i=1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }
        
        setBlankdays(blankdaysArray)
        setNo_of_days (daysArray)
    }

    useEffect(()=>{
        initDate()
    },[])

    useEffect(()=>{
        getNoOfDays()
    },[])

    console.log('blankdays',blankdays)
    console.log('no_of_days',no_of_days)

    
    function initDate() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let datepickerValue = new Date(year, month, today.getDate()).toDateString();
        setMonth(month++)
        setYear(year)
        return {
            month,
            year,
            datepickerValue
        }
    }

  


    function renderHeader() {
        return (
            <div className="flex justify-center">
                <div style={{ width: "14.28%" }} className="flex justify-center bg-red-600"><p>Dom</p></div>
                <div style={{ width: "14.28%" }} className="flex justify-center bg-gray-600"><p>Seg</p></div>
                <div style={{ width: "14.28%" }} className="flex justify-center bg-red-600"><p>Ter</p></div>
                <div style={{ width: "14.28%" }} className="flex justify-center bg-gray-600"><p>Qua</p></div>
                <div style={{ width: "14.28%" }} className="flex justify-center bg-red-600"><p>Qui</p></div>
                <div style={{ width: "14.28%" }} className="flex justify-center bg-gray-600"><p>Sex</p></div>
                <div style={{ width: "14.28%" }} className="flex justify-center bg-red-600"><p>Sáb</p></div>
            </div>
        )
    }

    function renderData(day: string, data: any) {
        return (

            
                <div style={{ width: "14.28%", height: "80px" }} className={`
                    flex  border
                    
                `}>
                    <div className="flex flex-col  flex-grow">
                        <div className={`
                            flex rounded-full w-5 h-5 mt-1  justify-center
                            items-start   
                            hover:bg-gray-300
                            `}>
                            <p className="text-xs ">{day}</p>
                        </div>
                        <div className="flex flex-col items-center overflow-auto mt-1 ">

                            <p className="text-xs">{data}</p>
                            <p className="text-xs">{data}</p>
                            <p className="text-xs">{data}</p>
                        </div>
                    </div>
                </div>

            
        )
    }



    return (
        <div className="flex flex-col justify-center border bg-white rounded-lg mt-1">
            {renderHeader()}
            <div className="flex flex-wrap ">
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            {renderData("1", "dafsdf")}
            </div>
        </div>
    )
}