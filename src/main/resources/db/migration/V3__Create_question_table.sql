
CREATE TABLE question
(
    id BIGINT PRIMARY KEY,
    title varchar(50),
    description TEXT,
    gmt_create BIGINT,
    gmt_modified BIGINT,
    creator BIGINT,
    comment_count int DEFAULT 0,
    view_count int DEFAULT 0,
    like_count int DEFAULT 0,
    tag varchar(256)
);
