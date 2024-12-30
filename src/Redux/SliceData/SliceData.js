import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  settings: [],
  homeslider: [],
  mobileapps: {},
  mobileappslider: [],
  ourapproaches: {},
  homeapproachmodels: [],
  homeclients: {},
  homeclientslogos: [],
  saasservices: {},
  saassliders: [],
  saascategories: [],
  saasclients: [],
  saasprocess: [],
  websitedevelopment: {},
  websiteslider: [],
  websitecategories: [],
  websiteprocess: [],
  mobilecategories: [],
  mobilepros: [],
  digitalcategories: [],
  aboutfirms: [],
  aboutteam: [],
  aboutads: {}
}

export const SliceData = createSlice({
  name: 'webdata',
  initialState,
  reducers: {
    addSettingsData: (state, action) => {
      state.settings = action.payload
    },
    addHomesliderData: (state, action) => {
      state.homeslider = action.payload
    },
    addMobileappsData: (state, action) => {
      state.mobileapps = action.payload
    },
    addMobileappsliderData: (state, action) => {
      state.mobileappslider = action.payload
    },
    addOurapproachesData: (state, action) => {
      state.ourapproaches = action.payload
    },
    addHomeapproachmodelsData: (state, action) => {
      state.homeapproachmodels = action.payload
    },
    addHomeclientsData: (state, action) => {
      state.homeclients = action.payload
    },
    addHomeclientslogosData: (state, action) => {
      state.homeclientslogos = action.payload
    },
    addSaasservicesData: (state, action) => {
      state.saasservices = action.payload
    },
    addSaasslidersData: (state, action) => {
      state.saassliders = action.payload
    },
    addSaascategoriesData: (state, action) => {
      state.saascategories = action.payload
    },
    addSaasclientsData: (state, action) => {
      state.saasclients = action.payload
    },
    addSaasprocessData: (state, action) => {
      state.saasprocess = action.payload
    },
    addWebsitedevelopmentData: (state, action) => {
      state.websitedevelopment = action.payload
    },
    addWebsitesliderData: (state, action) => {
      state.websiteslider = action.payload
    },
    addWebsitecategoriesData: (state, action) => {
      state.websitecategories = action.payload
    },
    addWebsiteprocessData: (state, action) => {
      state.websiteprocess = action.payload
    },
    addMobilecategoriesData: (state, action) => {
      state.mobilecategories = action.payload
    },
    addMobileprosData: (state, action) => {
      state.mobilepros = action.payload
    },
    addDigitalcategoriesData: (state, action) => {
      state.digitalcategories = action.payload
    },
    addAboutfirmsData: (state, action) => {
      state.aboutfirms = action.payload
    },
    addAboutteamData: (state, action) => {
      state.aboutteam = action.payload
    },
    addAboutadsData: (state, action) => {
      state.aboutads = action.payload
    }
  },
})


export const { addAboutadsData, addAboutteamData, addAboutfirmsData, addDigitalcategoriesData, addMobileprosData, addMobilecategoriesData, addWebsiteprocessData, addWebsitecategoriesData, addWebsitesliderData, addWebsitedevelopmentData, addSaasprocessData, addSaasclientsData, addSaascategoriesData, addSaasslidersData, addSaasservicesData, addHomeclientslogosData, addHomeclientsData, addHomeapproachmodelsData, addOurapproachesData, addMobileappsliderData, addMobileappsData, addSettingsData, addHomesliderData } = SliceData.actions

export default SliceData.reducer