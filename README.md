# @flowauth/shared

Shared utilities and types for FlowAuth - A comprehensive OAuth2 and permission management system.

## Description

This package provides shared utilities, types, and constants for FlowAuth's permission and RBAC (Role-Based Access Control) system. It includes bitmask-based permission management, role definitions, and utility functions for handling user permissions across different parts of the FlowAuth ecosystem.

## Features

- **Bitmask-based Permissions**: Efficient permission checking using bitwise operations
- **Role-Based Access Control**: Predefined roles with associated permissions
- **Type-Safe Constants**: TypeScript definitions for all permissions and roles
- **Utility Functions**: Helper methods for permission validation and role management
- **JWT Support**: Constants and types for JWT token handling
- **Authentication Constants**: Standardized error messages and configuration

## Usage

### Basic Permission Checking

```typescript
import { PermissionUtils, PERMISSIONS, ROLES } from "@flowauth/shared";

// Check if user has a specific permission
const userPermissions = PERMISSIONS.READ_USER | PERMISSIONS.WRITE_USER;
const hasReadPermission = PermissionUtils.hasPermission(userPermissions, PERMISSIONS.READ_USER);
// true

// Check if user has any of the required permissions
const hasAnyPermission = PermissionUtils.hasAnyPermission(userPermissions, [PERMISSIONS.READ_USER, PERMISSIONS.DELETE_USER]);
// true

// Check if user has all required permissions
const hasAllPermissions = PermissionUtils.hasAllPermissions(userPermissions, [PERMISSIONS.READ_USER, PERMISSIONS.WRITE_USER]);
// true
```

### Role Management

```typescript
import { PermissionUtils, ROLE_PERMISSIONS, ROLES, ROLE_NAMES } from "@flowauth/shared";

// Get permissions for a specific role
const clientManagerPermissions = ROLE_PERMISSIONS[ROLES.CLIENT_MANAGER];

// Get role name from permissions
const roleName = PermissionUtils.getRoleName(clientManagerPermissions);
// "클라이언트 관리자"

// Check if permissions represent admin access
const isAdmin = PermissionUtils.isAdmin(clientManagerPermissions);
// false
```

### Permission Constants

```typescript
import { PERMISSIONS, PERMISSION_NAMES } from "@flowauth/shared";

// Available permissions
console.log(PERMISSIONS.READ_USER); // 1
console.log(PERMISSIONS.WRITE_USER); // 2
console.log(PERMISSIONS.ADMIN_ACCESS); // 2147483648

// Permission names in Korean
console.log(PERMISSION_NAMES[PERMISSIONS.READ_USER]); // "사용자 조회"
```

### JWT and Authentication Constants

```typescript
import { JWT_CONSTANTS, AUTH_CONSTANTS, AUTH_ERROR_MESSAGES } from "@flowauth/shared";

// JWT configuration
console.log(JWT_CONSTANTS.EXPIRES_IN); // "1h"
console.log(JWT_CONSTANTS.ALGORITHMS); // ["HS256"]

// Authentication constants
console.log(AUTH_CONSTANTS.BCRYPT_SALT_ROUNDS); // 10

// Error messages
console.log(AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS); // "잘못된 자격 증명입니다"
```

## API Reference

### PermissionUtils Class

#### Static Methods

- `hasPermission(userPermissions: number, requiredPermission: number): boolean`

  - Checks if user has a specific permission

- `hasAnyPermission(userPermissions: number, requiredPermissions: number[]): boolean`

  - Checks if user has any of the required permissions

- `hasAllPermissions(userPermissions: number, requiredPermissions: number[]): boolean`

  - Checks if user has all required permissions

- `addPermissions(currentPermissions: number, permissionsToAdd: number[]): number`

  - Adds permissions to existing permissions

- `removePermissions(currentPermissions: number, permissionsToRemove: number[]): number`

  - Removes permissions from existing permissions

- `getPermissionNames(permissions: number): string[]`

  - Returns array of permission names for given permissions

- `getRoleName(permissions: number): string`

  - Returns the most appropriate role name for given permissions

- `isAdmin(permissions: number): boolean`

  - Checks if permissions include admin access

- `getDefaultPermissions(): number`

  - Returns default user permissions

- `permissionsToHex(permissions: number): string`

  - Converts permissions to hexadecimal string

- `hexToPermissions(hexString: string): number`
  - Converts hexadecimal string to permissions

### Constants

#### PERMISSIONS

Bitmask constants for all available permissions.

#### ROLES

String constants for all available roles.

#### ROLE_PERMISSIONS

Object mapping roles to their associated permissions.

#### ROLE_NAMES

Object mapping roles to their display names (in Korean).

#### PERMISSION_NAMES

Object mapping permission values to their display names (in Korean).

#### JWT_CONSTANTS

JWT-related configuration constants.

#### AUTH_CONSTANTS

Authentication-related constants.

#### AUTH_ERROR_MESSAGES

Standardized error messages for authentication failures.

#### TOKEN_TYPES

Available token types for JWT.

## Permission System

The permission system uses a 32-bit bitmask where each bit represents a specific permission:

- Bits 0-14: Regular permissions (READ_USER, WRITE_USER, etc.)
- Bit 31: Admin access (ADMIN_ACCESS)

Roles are predefined combinations of permissions:

- **USER**: Basic read permissions
- **CLIENT_MANAGER**: Client and token management permissions
- **TOKEN_MANAGER**: Token-specific permissions
- **USER_MANAGER**: User management permissions
- **ADMIN**: All permissions including admin access

## Development

### Building

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## License

MIT

## Contributing

This package is part of the FlowAuth ecosystem. Please see the main FlowAuth repository for contribution guidelines.
