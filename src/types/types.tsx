export interface IOrders {
    number: string;
    date: string;
    lastChangeDate: string;
    supplierArticle: string;
    techSize: string;
    barcode: string;
    quantity: number;
    totalPrice: number;
    discountPercent: number;
    isSupply: boolean;
    isRealization: boolean;
    orderId: number;
    promoCodeDiscount: number;
    warehouseName: string;
    countryName: string;
    oblast: string;
    regionName: string;
    incomeID: number;
    saleID: string;
    odid: number;
    spp: number;
    forPay: number;
    finishedPrice: number;
    priceWithDisc: number;
    nmId: number;
    subject: string;
    category: string;
    brand: string;
    IsStorno: number;
    gNumber: string;
}

export interface ISales {
    number: string;
    date: string;
    lastChangeDate: string;
    supplierArticle: string;
    techSize: string;
    barcode: string;
    quantity: number;
    totalPrice: number;
    discountPercent: number;
    isSupply: boolean;
    isRealization: boolean;
    orderId: boolean;
    promoCodeDiscount: number;
    warehouseName: string;
    countryName: string;
    oblastOkrugName: string;
    regionName: string;
    incomeID: number;
    saleID: string;
    odid: number;
    spp: number;
    forPay: number;
    finishedPrice: number;
    priceWithDisc: number;
    nmId: number;
    subject: string;
    category: string;
    brand: string;
    IsStorno: number;
    gNumber: string;
}
