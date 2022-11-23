const moment = require("moment")

const pluckYear = (dt: string) => {
    if(dt){
        return moment(dt).year()
    }

    return null
}

const pluckMonth = (dt: string) => {
    if(dt){
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ]
        const month = moment(dt).month()

        return months[month]
    }

    return null
}

const formatDate = (dt: string, format: string = "DD MMMM YYYY") => {
    try{
        return moment(dt).format(format)
    }catch(e){
        console.log(e)
        return "-"
    }
}

export default {
    pluckYear,
    pluckMonth,
    formatDate
}
