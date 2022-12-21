const numberFormat = (number: number,
    options?: Intl.NumberFormatOptions | undefined,
    locales: string | string[] = 'pt-BR',
) => {    
    return new Intl.NumberFormat(locales, options).format(number);
}

export default numberFormat