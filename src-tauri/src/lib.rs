// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri_plugin_sql::{Migration, MigrationKind};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let migrations = vec![
        Migration {
            version: 1,
            description: "create accounts table",
            sql: include_str!("../migrations/0001_create_accounts_table.sql"),
            kind: MigrationKind::Up,
        },
        Migration {
            version: 2,
            description: "create categories table",
            sql: include_str!("../migrations/0002_create_categories_table.sql"),
            kind: MigrationKind::Up,
        },
        Migration {
            version: 3,
            description: "create transactions table",
            sql: include_str!("../migrations/0003_create_transactions_table.sql"),
            kind: MigrationKind::Up,
        },
    ];

    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(
            tauri_plugin_sql::Builder::default()
                .add_migrations("sqlite:malnote.db", migrations)
                .build(),
        )
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
