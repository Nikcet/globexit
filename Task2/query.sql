WITH sub_tree AS (
    SELECT sd.id,
        sd.name,
        sd.parent_id,
        1 AS sub_level
    FROM subdivisions sd
        JOIN collaborators cb ON cb.subdivision_id = sd.id
    WHERE cb.id = 710253
    UNION ALL
    SELECT sd.id,
        sd.name,
        sd.parent_id,
        st.sub_level + 1
    FROM subdivisions sd
        JOIN sub_tree st ON sd.parent_id = st.id
    WHERE sd.id NOT IN (100055, 100059)
)
SELECT cols.id,
    cols.name,
    st.name AS sub_name,
    st.id AS sub_id,
    st.sub_level,
    (
        SELECT COUNT(*)
        FROM collaborators c2
        WHERE c2.subdivision_id = st.id
    ) AS colls_count
FROM sub_tree st
    JOIN collaborators cols ON cols.subdivision_id = st.id
WHERE cols.age < 40
ORDER BY st.sub_level ASC;