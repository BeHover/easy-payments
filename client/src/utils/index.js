export function serializeSettlements(settlements) {
    let serializedSettlements = [];
    for (const settlement of settlements) {
        let serializedSettlement = {
            'name': 'район ' + settlement.district.name + ', ' + settlement.streetName + ', будинок ' + settlement.number,
        };

        for (const apartment of settlement.apartments) {
            serializedSettlement.name += ', квартира ' + apartment.number;
            serializedSettlement.id = apartment.id;
        }

        serializedSettlements.push(serializedSettlement);
    }

    return serializedSettlements;
}