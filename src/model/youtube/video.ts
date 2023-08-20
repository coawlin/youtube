export type VideoSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
};

export type VideoStatistic = {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
};

export type VideoContentDetails = {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  regionRestriction: {
    allowed: [string];
    blocked: [string];
  };
  contentRating: {
    acbRating: string;
    agcomRating: string;
    anatelRating: string;
    bbfcRating: string;
    bfvcRating: string;
    bmukkRating: string;
    catvRating: string;
    catvfrRating: string;
    cbfcRating: string;
    cccRating: string;
    cceRating: string;
    chfilmRating: string;
    chvrsRating: string;
    cicfRating: string;
    cnaRating: string;
    cncRating: string;
    csaRating: string;
    cscfRating: string;
    czfilmRating: string;
    djctqRating: string;
    djctqRatingReasons: string[];
    ecbmctRating: string;
    eefilmRating: string;
    egfilmRating: string;
    eirinRating: string;
    fcbmRating: string;
    fcoRating: string;
    fmocRating: string;
    fpbRating: string;
    fpbRatingReasons: string[];
    fskRating: string;
    grfilmRating: string;
    icaaRating: string;
    ifcoRating: string;
    ilfilmRating: string;
    incaaRating: string;
    kfcbRating: string;
    kijkwijzerRating: string;
    kmrbRating: string;
    lsfRating: string;
    mccaaRating: string;
    mccypRating: string;
    mcstRating: string;
    mdaRating: string;
    medietilsynetRating: string;
    mekuRating: string;
    mibacRating: string;
    mocRating: string;
    moctwRating: string;
    mpaaRating: string;
    mpaatRating: string;
    mtrcbRating: string;
    nbcRating: string;
    nbcplRating: string;
    nfrcRating: string;
    nfvcbRating: string;
    nkclvRating: string;
    oflcRating: string;
    pefilmRating: string;
    rcnofRating: string;
    resorteviolenciaRating: string;
    rtcRating: string;
    rteRating: string;
    russiaRating: string;
    skfilmRating: string;
    smaisRating: string;
    smsaRating: string;
    tvpgRating: string;
    ytRating: string;
  };
  projection: string;
  hasCustomThumbnail: boolean;
};

export type VideoListResponse = {
  kind: "youtube#videoListResponse";
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: {
    statistics: VideoStatistic;
    snippet: VideoSnippet;
    contentDetails: VideoContentDetails;
  }[];
};
