-- Write your query below

SELECT 
    u.name ,
    SUM(COALESCE(r.distance, 0)) AS travelled_distance
FROM users u
LEFT JOIN rides r
    ON r.user_id = u.id
GROUP BY u.name, u.id
ORDER BY travelled_distance DESC, u.name ASC
