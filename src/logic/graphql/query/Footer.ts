import { gql } from "@apollo/client";

export const FooterQuery = (variables: any) => {
  return {
    query: gql`
      query PageQuery($path: String!) {
        content {
          pageByPath(path: $path) {
            ...FooterPlacement
          }
        }
      }

      fragment FooterPlacement on CMChannelImpl {
        grid {
          rows {
            placements {
              viewtype
              items {
                type
                ... on CMExternalLinkImpl {
                  url
                  pictures {
                    ... on CMPicture {
                      data {
                        uri
                      }
                    }
                  }
                }
                ... on CMChannelImpl {
                  teaserTargets {
                    target {
                      id
                      title
                      navigationPath {
                        segment
                      }
                    }
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
