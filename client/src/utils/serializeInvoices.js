export default function serializeInvoices(invoices) {
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