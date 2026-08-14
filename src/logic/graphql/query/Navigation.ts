import { gql } from "@apollo/client";

export const NavigationQuery = (variables: any) => {
  return {
    query: gql`
      query PageQuery($path: String!) {
        content {
          pageByPath(path: $path) {
            ...NavigationPlacement
          }
        }
      }

      fragment NavigationPlacement on CMChannelImpl {
        grid {
          rows {
            placements {
              viewtype
              items {
                type
                ... on CMChannelImpl {
                  teaserTargets {
                    target {
                      title
                      navigationPath {
                        segment
                      }
                    }
                  }
                }
                ... on CMCollectionImpl {
                  items {
                    ... on CMChannelImpl {
                      title
                      navigationPath {
                        segment
                      }
                    }
                    ... on CMTeaserImpl {
                      teaserTitle
                      teaserTargets {
                        callToActionText
                        target {
                          id
                          title
                          navigationPath {
                            segment
                          }
                          ... on CMDownloadImpl {
                            id
                            type
                            filename
                            data {
                              uri
                            }
                          }
                        }
                      }
                      pictures {
                        ... on CMPicture {
                          data {
                            uri
                          }
                        }
                      }
                    }
                  }
                }
                ... on CMTeaserImpl {
                  teaserTitle
                  teaserTargets {
                    target {
                      title
                      navigationPath {
                        segment
                      }
                    }
                  }
                }
                ... on CMPictureImpl {
                  data {
                    uri
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables,
  };
};
