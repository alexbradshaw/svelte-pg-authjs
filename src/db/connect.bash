docker exec -it $(docker ps | awk '/svelte-pg-authjs/ {print $1}') bash -c "psql -U templateuser -d templateDB"
