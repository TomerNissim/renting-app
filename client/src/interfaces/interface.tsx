export interface IAction {
  type: string;
  payload?: any;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface IUser extends ISignIn {
  _id?: string;
  fullName: string;
  phoneNumber: string;
  age: string;
  imgUrl: string;
  isOwner?: boolean | null;
}

export interface IUploadNewApt {
  _id?: string;
  address: string;
  title: string;
  cords: {
    lat: number;
    lng: number;
  };
  pricePerMonth: number;
  imagesUrl: string[];
  rentalType: string;
  entryDate: string;
  checkOutDate: string;
  size: number;
  floor: number;
  rooms: number;
  parking: boolean;
  porch: boolean;
  garden: boolean;
  furnished: boolean;
  elevator: boolean;
  handicapAccessible: boolean;
  petsAllowed: boolean;
  smokeAllowed: boolean;
  likedByUser?: {}[];
}

export interface IFilter {
  address: string;
  priceMin: number;
  priceMax: number;
  rentalType: string;
  entryDate: Date;
  checkOutDate: Date;
  sizeMin: number;
  sizeMax: number;
  roomsMin: number;
  roomsMax: number;
  parking: boolean;
  porch: boolean;
  garden: boolean;
  furnished: boolean;
  elevator: boolean;
  handicapAccessible: boolean;
  petsAllowed: boolean;
  smokeAllowed: boolean;
}

export interface IApt {
  address: string;
  imagesUrl: string[];
  ownerId: string;
  pricePerMonth: number;
  _id: string;
  cords: {
    lat: number;
    lng: number;
  };
}

export interface IAdvancedPref {
  rentalType: string;
  entryDate: Date;
  checkOutDate: Date;
  parking: boolean;
  porch: boolean;
  garden: boolean;
  furnished: boolean;
  elevator: boolean;
  handicapAccessible: boolean;
  petsAllowed: boolean;
  smokeAllowed: boolean;
}

export interface IChatRoomTemplate {
  aptId: string;
  participants: {
    ownerInfo: {
      id: string;
      imgUrl: string;
      fullName: string;
    };
    userInfo: {
      id: string;
      imgUrl: string;
      fullName: string;
    };
  };
}
export interface IChatRoom extends IChatRoomTemplate{
  title: string;

}
