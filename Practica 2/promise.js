//Declaro arreglos (objetos literal).
const Autos = [
    {
        id: 1,
        Descripcion: 'SUV presenta un desbalanceo en su tren superior',
        Placa: '978-AEF',
        Color: 'Rojo',
    },
    {
        id: 2,
        Descripcion: 'Camioneta tiene dañado dos pistones y falta ajustar las puntas',
        Placa: '911-ETF',
        Color: 'Negro',
    },
    {
        id: 3,
        Descripcion: 'Sedan llega a para realizar una alineacion',
        Placa: '920-CDT',
        Color: 'Blanco',
    },
]
const Mantenimiento = [
    {
        id: 1,
        IdVehiculo: 189,
        IdConcepto: 20,
        FechaMantenimiento: '20/10/23',
        Detalle: 'Si el vehiculo presenta fallo volver lo mas pronto',
    },
    {
        id: 2,
        IdVehiculo: 190,
        IdConcepto: 21,
        FechaMantenimiento: '23/10/23',
        Detalle: 'Si el vehiculo presenta ruidos raros al ejercer fuerza volver al mantenimiento',
    },
    {
        id: 3,
        IdVehiculo: 191,
        IdConcepto: 22,
        FechaMantenimiento: '28/10/23´',
        Detalle: 'Si el vehiculo tiende a jalar hacia algun lado reclamar la garantia del mantenimiento',
    },
]

//Las promesas llevan dos caminos, el reject para controlar los errores y el resolve para resolverlos.
 function buscarautoPorId(id)
 {
     return new Promise((resolve, reject)=>{
        const auto =  Autos.find((auto)=> auto.id=== id);
        if (!auto)
        {
            const error= new Error();
            error.message=`El auto con id ${id} no pudo ser encontrado`;
            reject(error);
        }
        resolve(auto);

     })

 }
 function asociarautoamantenimiento(auto)
{
    return new Promise((resolve,reject)=>{
        const mantenimientos =  Mantenimiento.find((mantenimiento)=> mantenimiento.id===auto.id);
        if (!mantenimientos)
        {
            const error= new Error();
            error.message=`El mantenimiento  con id ${id} no pudo ser encontrado`;
            reject(error)
        }
        auto.mantenimientos= mantenimientos;
        delete auto.id;
        resolve(auto);
    })
}
buscarautoPorId(2)
.then((auto)=>{
    return asociarautoamantenimiento(auto)
})
.then((auto)=>{
    console.log(auto)
})
.catch((motivo)=>{
    console.log(motivo.message)
})