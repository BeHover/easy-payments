export function getUserToken(store) {
    return store.consumer.user;
}

export function getSettlements(store) {
    return store.settlement.settlements;
}

export function getInvoices(store) {
    return store.invoice.invoices
}