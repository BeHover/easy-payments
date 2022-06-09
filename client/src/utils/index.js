export function serializeSettlements(settlements) {
    let serializedSettlements = [];
    for (const settlement of settlements) {
        let serializedSettlement = {
            'name': settlement.district.name + settlement.streetName + settlement.number,
        };

        for (const apartment of settlement.apartments) {
            serializedSettlement.name += apartment.number;
            serializedSettlement.id = apartment.id;
        }

        serializedSettlements.push(serializedSettlement);
    }

    return serializedSettlements;
}