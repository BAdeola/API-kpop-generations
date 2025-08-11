# Kpop Generations API

This project is a RESTful API for managing K-pop groups, their generations, and members. It allows you to list, add, and remove groups and idols, as well as retrieve information about generations.

## Features

- List all K-pop groups and their names
- Get details of a specific group by ID
- List all members of a group
- Add new groups to a generation
- Add new members to a group
- Remove groups and members by ID

## Technologies

- Node.js
- Express.js
- TypeScript
- JSON file as database

## Endpoints

### Groups

- `GET /groups`  
  Returns a list of all group names.

- `GET /groups/:id`  
  Returns details of a specific group.

- `POST /groups`  
  Adds a new group to a generation.

- `DELETE /groups/:id`  
  Removes a group by ID.

### Members

- `GET /idols/:groupId`  
  Returns all members of a group.

- `POST /groups/:groupId/member`  
  Adds a new member to a group.

- `DELETE /idols/:memberId`  
  Removes a member by ID.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm run start:dist

3. The API will be available at `http://localhost:3333`.

## Data Structure

All data is stored in a JSON file (`src/repositories/kpop-groups.json`) with the following structure:

```json
{
  "generations": [
    {
      "id": 1,
      "name": "First Generation",
      "groups": [
        {
          "id": 101,
          "name": "Group Name",
          "members": [
            {
              "id": 1,
              "name": "Idol Name"
            }
          ]
        }
      ]
    }
  ]