export const GRAPHQL_API =
  "https://europe-west3-apomap-staging.cloudfunctions.net/graphql";

export const GET_TASKS = `
query tasks {
    tasks {
        task_id
        task_type
        task_status
        task_origin
        task_tags
      }
  }
  `;
export const GET_LOCATIONS = `
query locations {
    locations {
        address
        id
        name
        owner
        system
        type
        color
      }
  }
  `;
export const GET_LOCATION = `
query location {
    location {
        address
        id
        name
        owner
        system
        type
        color
      }
  }
  `;

