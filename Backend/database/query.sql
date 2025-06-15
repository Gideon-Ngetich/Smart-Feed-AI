INSERT INTO
    `users` (
        `userId`,
        `firstName`,
        `lastName`,
        `email`,
        `phone`,
        `password`
    )
VALUES
    (
        '[value-1]',
        '[value-2]',
        '[value-3]',
        '[value-4]',
        '[value-5]',
        '[value-6]'
    )
UPDATE `users`
SET
    `userId` = '[value-1]',
    `firstName` = '[value-2]',
    `lastName` = '[value-3]',
    `email` = '[value-4]',
    `phone` = '[value-5]',
    `password` = '[value-6]'
WHERE
    1


SELECT `userId`, `firstName`, `lastName`, `email`, `phone`, `password` FROM `users` WHERE 1