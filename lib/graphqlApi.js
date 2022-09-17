import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/grapql",
  cache: new InMemoryCache(),
});

export default async (req,res) => {
  const search = req.body;
  try {
    const {data} = await client.query({
      query: gql `
      query {
        allNews(title_IContain:${search}) {
          edges {
            node {
              title
              content
              id
              slug
              image
              createdAt
            }
          }
        }
      }
      `
    });
    res.status(200).json({news: data.allNews.edges, error: null})

  } catch (error) {
    if (error.message === "404: Not Found") {
      res.status(404).json({news:null, error: "No data found"})
    } else {
      res.status(500).json({news:null, error:"Internal Error, Please try again"})
    }
  }

};