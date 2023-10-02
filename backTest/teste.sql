WITH PartidasFiltradas AS (
    SELECT
        J1.nome AS jogador1_nome,
        J2.nome AS jogador2_nome
    FROM
        Partidas P
        JOIN Jogador J1 ON P.jogador1_id = J1.id
        JOIN Jogador J2 ON P.jogador2_id = J2.id
    WHERE
        (pontos_jogador1 + pontos_jogador2) > 30
        AND duracao > 90
)
SELECT DISTINCT
    jogador1_nome AS nome
FROM
    PartidasFiltradas
GROUP BY
    jogador1_nome, jogador2_nome
HAVING
    COUNT(*) > 2
UNION
SELECT DISTINCT
    jogador2_nome AS nome
FROM
    PartidasFiltradas
GROUP BY
    jogador1_nome, jogador2_nome
HAVING
    COUNT(*) > 2;
