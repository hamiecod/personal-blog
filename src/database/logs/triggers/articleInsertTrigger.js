export function createArticleInsertTrigger() {
    let query=`
    DELIMITER $$
    CREATE TRIGGER record_inserted
    AFTER INSERT
    ON article
    FOR EACH ROW BEGIN
        INSERT INTO logs VALUES("Added an article", CURRENT_TIMESTAMP());
    END$$
    DELIMITER ;
    `;
    connection.query(query, (error)=>{throw error});
}
