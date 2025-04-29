const i18nConfig ={
    locales: ["en", "es"],
    defaultLocale: "en",
    prefixDefault:true
}

export default i18nConfig

export type Locale = (typeof i18nConfig)['locales'][number]