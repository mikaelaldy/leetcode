# Write your MySQL query statement below
SELECT DISTINCT author_id as id
FROM Views
where author_id = viewer_id
order by id ASC;

# gunakan select distinct untuk memilih author_id yang memiliki nilai unik ( tidak duplikat)