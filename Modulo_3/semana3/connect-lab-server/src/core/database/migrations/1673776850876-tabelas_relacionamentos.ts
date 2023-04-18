import { MigrationInterface, QueryRunner } from "typeorm";

export class tabelasRelacionamentos1673776850876 implements MigrationInterface {
    name = 'tabelasRelacionamentos1673776850876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dispositivos_entity" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "tipo" character varying NOT NULL, "fabricante" character varying NOT NULL, "status" character varying NOT NULL, "info" character varying NOT NULL, "ip" character varying NOT NULL, "endereco_mac" character varying NOT NULL, "local" character varying, "usuario_id" integer, CONSTRAINT "PK_40176e32318c0719bb94c2c0792" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "foto_url" character varying NOT NULL DEFAULT 'https://user-images.githubusercontent.com/83764701/210249786-2b2be989-b7ed-41ee-856f-876dd80030e2.png', "email" character varying NOT NULL, "senha" character varying NOT NULL, "salt" character varying NOT NULL, "telefone" character varying, "endereco_id" integer, CONSTRAINT "UQ_415c35b9b3b6fe45a3b065030f5" UNIQUE ("email"), CONSTRAINT "REL_39115ed1d85fa3864a4fa52ff6" UNIQUE ("endereco_id"), CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "endereco_entity" ("id" SERIAL NOT NULL, "cep" character varying NOT NULL, "logradouro" character varying NOT NULL, "numero" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "complemento" character varying, CONSTRAINT "PK_517f148df06b6087e37787e3c7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dispositivos_entity" ADD CONSTRAINT "FK_c774d1c547863419d6b139d5552" FOREIGN KEY ("usuario_id") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "FK_39115ed1d85fa3864a4fa52ff6c" FOREIGN KEY ("endereco_id") REFERENCES "endereco_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        
        await queryRunner.query(`INSERT INTO dispositivos_entity
        (nome, tipo, fabricante, status, info, ip, endereco_mac)
        VALUES
        ('Fechadura Smart', 'Fechadura', 'Intelbras', 'Desligado', 'Chaveiro de aproximação', '115.145.140.169', '96-32-34-43-93-27'),
        ('Roteador Mesh Twibi Giga', 'Roteador', 'Intelbras', 'Desligado', 'Modo do rádio: MU-MiMo', '113.206.225.79', '76-0D-5E-1F-F5-88'),
        ('Lâmpada LED Wi-Fi Smart', 'Lâmpada', 'Intelbras', 'Desligado', 'Lâmpada: 10W', '244.233.94.148', 'E7-A0-4D-C4-3D-49'),
        ('Sensor de Temperatura Sensor', 'Sensor', 'Intelbras', 'Desligado', 'Potência de transmissão =15 dBm', '25.214.30.194', '0C-CC-AF-91-A3-A2'),
        ('Interruptor Smart Wi-Fi Touch', 'Interruptor', 'Intelbras', 'Desligado', 'Interruptor: 1,2 W', '178.35.101.123', '1F-EA-91-93-9F-5A'),
        ('Interruptor Conector Inteligente Wi-Fi', 'Interruptor', 'Intelbras', 'Desligado', 'Potência máxima: 2.200W', '209.44.139.79', '74-A9-39-24-27-FB'),
        ('Sensor de Movimento Smart', 'Sensor', 'Intelbras', 'Desligado', 'Frequência de operação: IEEE 802.15.4', '238.168.1.100', 'EE-D8-24-1B-20-B4'),
        ('Câmera de Vídeo Wi-Fi Full HD', 'Câmera', 'Intelbras', 'Desligado', 'Consumo máximo de corrente 0,7 A', '104.170.137.245', '08-0E-0C-23-D4-45'),
        ('Câmera de Vídeo Wi-Fi Full HD iZC', 'Câmera', 'Intelbras', 'Desligado', 'Consumo máximo de corrente 0,29 A', '153.27.95.207', 'B7-B3-CE-9D-0A-FB'),
        ('Minibotão Smart Intelbras ISW 1001', 'Minibotão', 'Intelbras', 'Desligado', ' Frequência de operação: IEEE 802.15.4', '196.24.63.213', '02-D0-DF-62-1E-4E'),
        ('Lâmpada LED Spot Smart Wi-Fi ', 'Lâmpada', 'Intelbras', 'Desligado', 'Lâmpada: 4,8 W', '179.37.126.95', '81-64-FA-71-C8-80'),
        ('Sensor de Abertura Smart ISA 1001', 'Sensor', 'Intelbras', 'Desligado', 'Frequência de operação: IEEE 802.15.4', '37.187.191.141', '16-F7-16-C9-B8-A0'),
        ('Detector de Fumaça Smart Intelbras', 'Detector', 'Intelbras', 'Desligado', 'Protocolo de comunicação ZigBee', '109.42.103.133', '9F-56-EF-38-02-CD'),
        ('Detector de Monóxido de Carbono Smart', 'Detector', 'Intelbras', 'Desligado', 'Protocolo de comunicação ZigBee', '253.218.223.96', 'D7-B9-F4-42-4A-64'),
        ('Sirene Smart ISI 1001', 'Sirene', 'Intelbras', 'Desligado', 'Protocolo de comunicação ZigBee', '123.38.214.61','69-3E-B8-A6-B5-97')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "FK_39115ed1d85fa3864a4fa52ff6c"`);
        await queryRunner.query(`ALTER TABLE "dispositivos_entity" DROP CONSTRAINT "FK_c774d1c547863419d6b139d5552"`);
        await queryRunner.query(`DROP TABLE "endereco_entity"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TABLE "dispositivos_entity"`);
    }

}
