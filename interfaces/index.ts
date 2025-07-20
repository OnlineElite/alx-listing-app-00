export interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
}

// Placeholder for button component props
export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

export interface address{
  state : string;
  city : string;
  country : string;
}

export interface offers {
  bed : string;
  shower : string;
  occupants : string;
}

export interface PropertyProps{
  name : string;
  address : address;
  rating : number;
  category : string[];
  price : number;
  offers : offers;
  image : string;
  discount : string;
}