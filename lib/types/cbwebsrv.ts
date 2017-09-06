// This file is generated from WSDL.

// [Import]
import * as base from "./base";

// [SimpleType]
export type CBWebSrvWeatherType = "sunny" | "sunny_after_cloudy" | "sunny_after_rainy" | "sunny_after_snowy" | "cloudy" | "cloudy_after_sunny" | "cloudy_after_rainy" | "cloudy_after_snowy" | "rainy" | "rainy_after_sunny" | "rainy_after_cloudy" | "rainy_after_snowy" | "hard_rain" | "snowy" | "snowy_after_sunny" | "snowy_after_cloudy" | "snowy_after_rainy" | "hard_snow";

// [ComplexType]
// CBWebSrvWeatherLocationType
export interface CBWebSrvWeatherLocationTypeAttribute {
    code: base.IDType;
    name: base.NonBlankStringType;
}
export interface CBWebSrvWeatherLocationType {
    attributes: CBWebSrvWeatherLocationTypeAttribute
}

// CBWebSrvGetWeatherLocationsRequestType
export interface CBWebSrvGetWeatherLocationsRequestType {
    
}

// CBWebSrvGetWeatherLocationsResponseType
export interface CBWebSrvGetWeatherLocationsResponseType {
    
    location?: CBWebSrvWeatherLocationType | CBWebSrvWeatherLocationType[];
}

// CBWebSrvWeatherDataType
export interface CBWebSrvWeatherDataTypeAttribute {
    date: string;
    location_code: base.IDType;
    weather: CBWebSrvWeatherType;
    min_temperature: number;
    max_temperature: number;
    rainfall_probability: number;
}
export interface CBWebSrvWeatherDataType {
    attributes: CBWebSrvWeatherDataTypeAttribute
}

// CBWebSrvGetWeathersByLocationRequestType
export interface CBWebSrvGetWeathersByLocationRequestTypeAttribute {
    start: string;
    end: string;
    location_code: base.IDType;
}
export interface CBWebSrvGetWeathersByLocationRequestType {
    attributes: CBWebSrvGetWeathersByLocationRequestTypeAttribute
}

// CBWebSrvGetWeathersByLocationResponseType
export interface CBWebSrvGetWeathersByLocationResponseType {
    
    weather?: CBWebSrvWeatherDataType | CBWebSrvWeatherDataType[];
}

// CBWebSrvGetWeathersRequestType
export interface CBWebSrvGetWeathersRequestTypeAttribute {
    start: string;
    end: string;
}
export interface CBWebSrvGetWeathersRequestType {
    attributes: CBWebSrvGetWeathersRequestTypeAttribute
}

// CBWebSrvGetWeathersResponseType
export interface CBWebSrvGetWeathersResponseType {
    
    weather?: CBWebSrvWeatherDataType | CBWebSrvWeatherDataType[];
}

