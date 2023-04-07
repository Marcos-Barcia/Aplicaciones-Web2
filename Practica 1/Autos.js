const Autos = [
    {
        IdA: 1,
        Descripcion: 'SUV presenta un desbalanceo en su tren superior',
        Placa: '978-AEF',
        Color: 'Rojo',
    },
    {
        IdA: 2,
        Descripcion: 'Camioneta tiene dañado dos pistones y falta ajustar las puntas',
        Placa: '911-ETF',
        Color: 'Negro',
    },
    {
        IdA: 3,
        Descripcion: 'Sedan llega a para realizar una alineacion',
        Placa: '920-CDT',
        Color: 'Blanco',
    },
]

const Concepto = [
    {
        Id: 1,
        Descripcion: 'SUV presenta un desbalanceo en su tren superior ',
    },
    {
        Id: 2,
        Descripcion: 'Camioneta tiene dañado dos pistones y falta ajustar las puntas',
    },
    {
        Id: 3,
        Descripcion: 'Sedan llega a para realizar una alineacion',
    }
]
const Mantenimiento = [
    {
        Id: 1,
        IdVehiculo: 189,
        IdConcepto: 20,
        FechaMantenimiento: '20/10/23',
        Detalle: 'Si el vehiculo presenta fallo volver lo mas pronto',
    },
    {
        Id: 2,
        IdVehiculo: 190,
        IdConcepto: 21,
        FechaMantenimiento: '23/10/23',
        Detalle: 'Si el vehiculo presenta ruidos raros al ejercer fuerza volver al mantenimiento',
    },
    {
        Id: 3,
        IdVehiculo: 191,
        IdConcepto: 22,
        FechaMantenimiento: '28/10/23´',
        Detalle: 'Si el vehiculo tiende a jalar hacia algun lado reclamar la garantia del mantenimiento',
    },
]

console.log(' \n Auto \n')
for (const iterator of Autos)
{
    Docotroaux=Concepto.find(ele=> ele.IdA===iterator.Id)
    console.log(`*id Auto: ${iterator.IdA} * Descripcion: ${iterator.Descripcion} *Placa: ${iterator.Placa} *Color: ${iterator.Color}`);
}
console.log('\n Concepto \n ' )
Concepto.forEach(Concepto => {
       console.log(`*id: ${Concepto.Id}*: ${Concepto.Descripcion} `)
       
});    

console.log('\n Mantenimiento\n')
for (elemento of  Mantenimiento){
   
    console.log(` *id : ${elemento.Id} *id Vehiculo: ${elemento.IdVehiculo} *id Concepto: ${elemento.IdConcepto} *Fecha Mantenimiento :${elemento.FechaMantenimiento} *Detalle:${elemento.Detalle}`)
    }
   
