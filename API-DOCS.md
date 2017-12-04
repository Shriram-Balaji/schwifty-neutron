# API Docs

## Dribbble

`GET /shots` - gets the list of shots now

### Parameters

### list

Limit the results to a specific type with the following possible values:

- animated, attachments, debuts, playoffs, rebounds, teams
- **Default**: Results of any type.

### timeframe

A period of time to limit the results to with the following possible values:

- week , month,  year , ever
- **Note** : the value is ignored when sorting with recent.
- **Default** : Results from now.

### date

Limit the timeframe to a specific date, week, month, or year. Must be in the format of YYYY-MM-DD.

### sort

- The sort field with the following possible values: comments, recent, views
- **Default**: Results are sorted by popularity.

## Product Hunt

`GET /posts` - latest in tech today