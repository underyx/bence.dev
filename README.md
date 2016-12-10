# underyx.me

My personal website, hosted at https://underyx.me

## Usage

To serve the current version

    docker-compose up

To launch in developer mode (with auto-rebuilding and such)

    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

## Tests

    docker-compose run app rake test
