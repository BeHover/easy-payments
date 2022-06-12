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

export function serializeInvoices(invoices) {
    let serializedInvoices = {
        'invoices': [],
        'totalPrice': 0
    };

    for (const invoice of invoices) {
        serializedInvoices.totalPrice += invoice.value;
        let serializedInvoice = {
            'icon': invoice.service.icon,
            'name': invoice.service.name,
            'provider': invoice.service.provider,
            'date': invoice.createdAt.date,
            'price': invoice.value
        }

        serializedInvoices.invoices.push(serializedInvoice);
    }

    return serializedInvoices;
}