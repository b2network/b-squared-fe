export interface ListWrapper<T> {
  page?: any;
  data: T;
  offers?: T;
  listings?: T;
  rankings?: T;
}

export interface ItemDetailProperty {
  trait_type: string;
  value: string;
}

export interface MakerOrder {
  isOrderAsk: boolean;
  makeAddress: string;
  collectionAddress: string;
  price: string;
  tokenId: string;
  quantity: string;
  strategyAddress: string;
  currencyAddress: string;
  nonce: string;
  startTime: string;
  endTime: string;
  minPercentageToAsk: string;
  params: string;
  sign: string;
  ownerAddress: string;
  unitPrice: string;
  blockChain: string;
  orderHash: string;
}

export interface AccountBase {
  blockChain: 'eth';
  address: string;
}

export interface AccountSign extends AccountBase {
  sign: string;
}

export interface AccountInfo extends AccountBase {
  accessToken: string;
  userName: string;
  email: string;
  profileImage: string;
  profileBanner: string;
  socialLinks: string;
}

export interface Category {
  id: number;
  name: string;
}

interface ArticleCData {
  cat_ID: number;
  name: string;
}

export interface Article {
  id: number;
  title: any;
  featured_image_src: string;
  excerpt: any;
  date: string;
  categories_data: ArticleCData[];
  author_name: string;
  content: any;
  prev_post: any;
  next_post: any;
}

export interface CollectionDetail extends Exclude<Collection, 'isVerified'> {
  contractAddress: string;
  creatorAddress: string;
  description: string;
  totalVolume: string;
  socialLinks: string;
  bannerImage: string;
  featureImage: string;
  royaltyAddress: string;
  royaltiesPercentage: number;
  managers?: string[];
}

export interface Royalty {
  itemAdress: string;
  unitPrice: number;
  quantity: number;
  feeEarned: number;
  creatorEarning: number;
}

export interface Collection {
  name: string;
  logoImage: string;
  bannerImage: string;
  floorPrice: string;
  ownersTotal: number;
  itemsTotal: number;
  isVerified: boolean;
  tokenId: string;
  address: string;
  creator?: string;
}

export interface Currency {
  id: number;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: string;
  tokenAddress: string;
}

export interface Adv {
  id: number;
  title: string;
  advType: number;
  advPosition: number;
  imageUrl: string;
  targetUrl: string;
  description: string;
  startTime: string;
  endTime: string;
  status: number;
  sort: number;
  extParams: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
}

export interface ItemActivity {
  activityType: string;
  unitPrice: string;
  quantity: string;
  from: string;
  to: string;
  activityTime: string;
  txHash: string;
  info: {
    itemId: number;
    collectionId: string;
    collectionAddress: string;
    collectionName: string;
    tokenName: string;
    tokenId: string;
    imageUrl: string;
    isVerified: boolean;
  };
  isOpen?: boolean;
}

interface BaseItem {
  id: number;
  tokenId: string;
  imgUrl: string;
  collectionName: string;
  name: string;
  isCollectionVerified: boolean;
}

export interface ListingItem {
  unitPrice: string;
  quantity: string;
  aboveFloor: number;
  from: string;
  isBuyEnabled: boolean;
  isCancelEnabled: boolean;
  orderHash: string;
  createTime: string;
  endTime: string;
  usdPrice: string;
  floorDifference?: string;
  expireAt?: string;
  isAcceptable?: boolean;
  isCancelable?: boolean;
  createAt?: string;
}
export interface Item extends BaseItem {
  lastTakerPrice: number;
  lowestCurrencyToken: string;
  lowestUnitPrice: number;
  highestOfferCurrencyToken: string;
  highestOfferCurrentPrice: number;
  tokenStandard: '721' | '1155';
  ownerQuantity: string;
  askCount: number;
  isListed?: boolean;
  collectionAddress: string;
  highestOfferCurrencyPrice: string;
  listedQuantity: string;
  myCount?: string;
  ownerListedQuantity?: string;
  ownerAddress?: string;
  owners: ItemDetailOwner[];
}

export interface OfferItem {
  id: number;
  currencyId: number;
  currencySymbol: string;
  unitPrice: string;
  usdPrice: string;
  floorDifference: string;
  from: string;
  to: string;
  expireAt: string;
  createTime: string;
  isAcceptable: boolean;
  isCancelable: boolean;
  quantity: number;
  aboveFloor?: number;
  endTime?: string;
  isBuyEnabled?: boolean;
  isCancelEnabled?: boolean;
  createAt?: string;
}

export interface ItemDetailOwner {
  name?: string;
  logoImage?: string;
  walletAddress: string;
  quantity: string;
}
export interface ItemDetail {
  id: number;
  imageUrl: string;
  collectionName: string;
  collectionAddress: string;
  name: string;
  ownerAddress: string;
  endTime: string;
  ownerPrice: string;
  topOffer: string;
  contractAddress: string;
  tokenId: string;
  tokenStandard: '721' | '1155';
  blockChain: string;
  properties: string;
  description: string;
  lowestCurrencyToken: string;
  lowestUnitPrice: string;
  lowestQuantity: string;
  lowestOrderHash: string;
  lastTakerUnitPrice: string;
  highestOfferCurrencyToken: string;
  highestOfferUnitPrice: string;
  isCollectionVerified: boolean;
  isListed: boolean;
  listedOrderHash: string;
  owners: ItemDetailOwner[];
  total: string;
  myCount: string;
  ownerListedQuantity?: string;
  ownerQuantity?: string;
}

export interface OrderItem extends BaseItem {
  unitPrice: number;
  usdPrice: number;
  floorDifference: number;
  quantity: number;
  fromAddress: string;
  endTime: string;
}

export interface RankingItem {
  collectionAddress: string;
  rankingNumber: number;
  name: string;
  logoImage: string;
  volumeAmount: number;
  volumeChange: number;
  floorPrice: string;
  ownersTotal: string;
  itemsTotal: string;
  isVerified: boolean;
  trades: number;
}

export interface HomeAdvCollectionsItem {
  bannerUrl: string;
  logoUrl: string;
  name: string;
  address: string;
  description: string;
  isVerified: boolean;
  tokenId: string;
  creator: string;
}
export interface HomeAdvItemsItem {
  title: string;
  description: string;
  tokenId: string;
  collectionName: string;
  imageUrl: string;
  collectionAddress: string;
  collectionLogo: string;
}
export interface HomeAdvItem {
  advType: string;
  collections: HomeAdvCollectionsItem[];
  items: HomeAdvItemsItem[];
  position: string;
}
export interface HomeAdv {
  title: string;
  advs: HomeAdvItem[];
}
export interface SearchItemsProps {
  isListed?: boolean;
  maxPrice?: string;
  minPrice?: string;
  collectionAddresses?: string[];
  sort?: string | null;
  page: {
    offset: number;
    size: number;
  };
  ownerAddress?: string;
  keyword?: string;
}
export interface ItemCardType {
  id: string;

  imgUrl: string;
  collectionName: string;
  isCollectionVerified: boolean;
  name: string;
  tokenId: string;

  lastTakerPrice?: number;
  lowestUnitPrice?: number;
  highestOfferCurrencyPrice?: number;

  tokenStandard: '721' | '1155';
  isListed: boolean;
  listedQuantity: string;
  bidcount: string;
  collectionAddress: string;
}

export interface AccountOffersItem {
  item: {
    itemId: string;
    collectionId: string;
    collectionAddress: string;
    collectionName: string;
    tokenName: string;
    tokenId: string;
    imageUrl: string;
    isVerified: boolean;
  };
  unitPrice: string;
  usdUnitPrice: string;
  floorDifference: number;
  quantity: string;
  fromAddress: string;
  receivedTime: string;
  endTime: string;
  orderHash: string;
}

export interface HeaderSearch {
  items: {
    logoUrl: string;
    collectionAddress: string;
    tokenId: string;
    name: string;
  }[];
  collections: {
    logoUrl: string;
    collectionAddress: string;
    name: string;
    tokenId: string;
  }[];
  accounts: {
    logoUrl: string;
    walletAddress: string;
    name: string;
  }[];
}
