type PermissionPayload = string | Array<string>;

const checkPermissions = (
  permissionsList: Array<string>,
  permissions: Array<string>
) => {
  return (
    permissionsList.filter((el) => permissions.includes(el)).length ===
    permissions.length
  );
};

const transformPermissionToArray = (permissions: PermissionPayload) => {
  return Array.isArray(permissions) ? permissions : [permissions];
};

export const useHasPermission = (permissionsList: Array<string>) => {
  const hasPermission = (permissions: PermissionPayload) => {
    const correctPermissions = transformPermissionToArray(permissions);

    return checkPermissions(permissionsList, correctPermissions);
  };

  const hasNotPermission = (permissions: PermissionPayload) => {
    const correctPermissions = transformPermissionToArray(permissions);

    return !checkPermissions(permissionsList, correctPermissions);
  };

  const hasPermissionOrPermission = (
    permissions: PermissionPayload,
    permissionsCondition: PermissionPayload
  ) => {
    const correctPermissions = transformPermissionToArray(permissions);

    const correctPermissionsCondition =
      transformPermissionToArray(permissionsCondition);

    return (
      checkPermissions(permissionsList, correctPermissions) ||
      checkPermissions(permissionsList, correctPermissionsCondition)
    );
  };

  const hasPermissionAndNotPermission = (
    permissions: PermissionPayload,
    permissionsCondition: PermissionPayload
  ) => {
    const correctPermissions = transformPermissionToArray(permissions);

    const correctPermissionsCondition =
      transformPermissionToArray(permissionsCondition);

    return (
      checkPermissions(permissionsList, correctPermissions) &&
      !checkPermissions(permissionsList, correctPermissionsCondition)
    );
  };

  return {
    hasPermission,
    hasNotPermission,
    hasPermissionOrPermission,
    hasPermissionAndNotPermission,
  };
};

export const useCurrentUserHasPermission = () => {
  const permissionsList = [""];

  return useHasPermission(permissionsList);
};
