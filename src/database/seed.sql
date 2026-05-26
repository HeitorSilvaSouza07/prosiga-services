-- Script de seed para teste no Postman
-- Execute após criar o schema no SQL Server.

SET NOCOUNT ON;

INSERT INTO tblSubject (SubName)
VALUES
    ('Matemática'),
    ('Português'),
    ('História');

INSERT INTO tblPermissios (PerKey, PerDesc)
VALUES
    ('CREATE_ACTIVITY', 'Permite criar atividades'),
    ('GRADE_SUBMISSION', 'Permite corrigir envios'),
    ('VIEW_REPORTS', 'Permite visualizar relatórios');

INSERT INTO tblUser (UserName, UserCpf, UserType, UserPassword, UseAdmin, IdSub)
VALUES
    ('Admin Test', '12345678901', 'admin', '$2b$10$kh7KKeZI4F9FyJPcj/cvdOdA2ou4.dHLJhMi6ZjtCBqsLTNtsc/CG', 1, NULL),
    ('Teacher Test', '23456789012', 'teacher', '$2b$10$uSdHcHZJ83cS9ZkDwA5IY.p0yGrOazHEdkV2OdKPkLCmGPAYJ9epy', 0, 1),
    ('Student Test', '34567890123', 'student', '$2b$10$G.hIBPqh8hr3RC79hWjGkOzvzDqXg/oAEPaNANydYlw6fxUOh.TQq', 0, 2);

INSERT INTO tblClass (ClassPeriod, ClassCurso, IdUser)
VALUES
    (1, 'Curso A', 2);

INSERT INTO tblActivities (IdUser, IdClass, ActivitieType, ActivitieTitle, ActivitieDescription, ActivitieDataEnd, ActivitieDataCreate, CreatedAt)
VALUES
    (2, 1, 'Tarefa', 'Atividade de Teste', 'Descrição de teste para a atividade.', '2026-12-31 23:59:59', GETDATE(), GETDATE());

INSERT INTO tblSubmit (IdActivities, IdUser, SubSenteAt)
VALUES
    (1, 3, GETDATE());

INSERT INTO tblUserPermission (IdUser, IdPer)
VALUES
    (2, 2);

INSERT INTO tblUserSubject (IdUser, IdSub)
VALUES
    (3, 2);
